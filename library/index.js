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

export const getAllPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(skip: 4) {
        title
        slug
        excerpt
        categories {
          name
          slug
        }
        createdAt
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getFirst4Posts = async () => {
  const query = gql`
    query MyQuery {
      posts(first: 4) {
        title
        slug
        excerpt
        categories {
          name
          slug
        }
        createdAt
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
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

export const getOtherFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: createdAt_DESC
        where: { featured: true }
        skip: 1
      ) {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            excerpt
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
        where: { featured: false, todaysPick: false, trending: false }
        first: 5
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

export const get5Latest = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: createdAt_DESC
        where: { featured: false, todaysPick: false, trending: false }
        first: 4
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

export const get10Latest = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: createdAt_DESC
        where: { featured: false, todaysPick: false, trending: false }
        first: 4
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

export const getTrendingPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        orderBy: createdAt_DESC
        first: 4
        where: { trending: true }
      ) {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            excerpt
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

export const getHomeNFTPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "NFT" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getHomeCulturePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "Kültür" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getHomeTechnologyPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "Teknoloji" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getHomeMetaversePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "Metaverse" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getHomeBlockchainPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "Blockchain" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getHomeDeFiPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { categories_some: { name: "DeFi" } }
        orderBy: createdAt_DESC
        first: 3
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
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postsConnection(
        orderBy: createdAt_DESC
        where: { categories_some: { slug: $slug } }
        skip: 4
      ) {
        edges {
          node {
            title
            slug
            excerpt
            createdAt
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
  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getFirst4CategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postsConnection(
        orderBy: createdAt_DESC
        where: { categories_some: { slug: $slug } }
        first: 4
      ) {
        edges {
          node {
            title
            slug
            excerpt
            createdAt
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
  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        createdAt
        content {
          html
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            excerpt
            content {
              html
            }
            createdAt
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

export const getMorePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC, first: 8) {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            excerpt
            content {
              html
            }
            createdAt
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
