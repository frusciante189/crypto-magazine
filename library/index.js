import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getFirstFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { featured: true }
        orderBy: createdAt_DESC
        first: 1
      ) {
        edges {
          node {
            categories {
              name
              slug
            }
            excerpt
            featuredImage {
              url
            }
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges[0].node;
};

export const getTodaysPicks = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        first: 2
        orderBy: createdAt_DESC
        where: { todaysPick: true }
      ) {
        edges {
          node {
            title
            categories {
              name
              slug
            }
            slug
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getLatestHeroPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: createdAt_DESC
        where: { featured: false, todaysPick: false }
      ) {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
