import { notFound } from "next/navigation";
import { allAbouts } from "contentlayer/generated";

import { Mdx } from "@/components/MdxComponent";

async function getAboutFromParams(params) {
  const title = params.title.join("/");
  const post = allAbouts.find((post) => post.title === title);
  if (!post) return null;
  return post;
}

export async function generateStaticParams() {
  return allAbouts.map((about) => ({
    title: about.title.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const about = await getAboutFromParams(params);
  if (!about) {
    return {};
  }

  const title = about.title;
  const description = about.summary;
  const ogImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/projects/${title}`,
      images: {
        url: ogImage,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function AboutDetail({ params }) {
  const about = await getAboutFromParams(params);
  if (!about) {
    notFound();
  }

  return <Mdx code={about.body.code} />;
}
