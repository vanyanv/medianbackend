import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
  {
    title: 'First Post',
    description: 'This is the first post',
    body: 'Content of the first post',
    published: true,
  },
  {
    title: 'Second Post',
    description: 'This is the second post',
    body: 'Content of the second post',
    published: false,
  },
  {
    title: 'Third Post',
    description: 'This is the third post',
    body: 'Content of the third post',
    published: true,
  },
  {
    title: 'Fourth Post',
    description: 'This is the fourth post',
    body: 'Content of the fourth post',
    published: false,
  },
  {
    title: 'Fifth Post',
    description: 'This is the fifth post',
    body: 'Content of the fifth post',
    published: true,
  },
  {
    title: 'Sixth Post',
    description: 'This is the sixth post',
    body: 'Content of the sixth post',
    published: false,
  },
  {
    title: 'Seventh Post',
    description: 'This is the seventh post',
    body: 'Content of the seventh post',
    published: true,
  },
  {
    title: 'Eighth Post',
    description: 'This is the eighth post',
    body: 'Content of the eighth post',
    published: false,
  },
];

async function main() {
  //seed the db with random posts
  for (const post of posts) {
    await prisma.article.upsert({
      where: { title: post.title },
      update: {},
      create: {
        title: post.title,
        body: post.body,
        description: post.description,
        published: post.published,
      },
    });
    console.log('Created Post:', post.title);
  }
}

//runs the main fuction
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //closes the prisma client
    await prisma.$disconnect;
  });
