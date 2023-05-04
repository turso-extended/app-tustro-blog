import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_BASE_URL } from "../consts";
import { client } from "../lib/tursoDb";

let posts = [];
try {
  const allPostsResponse = await client.execute({
    sql: "select posts.title, posts.description, posts.slug, posts.hero, authors.first_name, authors.last_name, authors.slug as author_slug, authors.avatar, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id order by posts.created_at desc;",
    args: [],
  });

  posts = allPostsResponse.rows.map((post) => {
    return {
      published: false,
      title: post.title,
      description: post.description,
      slug: post.slug,
      hero: post.hero,
      created_at: post.created_at,
      publish_date: post.publish_date,
      author: {
        first_name: post.first_name,
        last_name: post.last_name,
        slug: post.slug,
        avatar: post.avatar,
      },
    };
  });
} catch (error) {
  console.log(error);
}

export async function get(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_BASE_URL,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publish_date || post.created_at,
      description: post.description,
      link: `/post/${post.slug}/`,
    })),
  });
}
