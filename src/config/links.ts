// 友链配置文件
export interface Link {
  name: string;
  url: string;
  description: string;
  avatar?: string;
}

export const links: Link[] = [
  {
    name: "Astro",
    url: "https://astro.build",
    description: "The all-in-one web framework",
    avatar: "https://astro.build/assets/press/full-logo-light.png"
  },
  {
    name: "GitHub",
    url: "https://github.com",
    description: "Build software better, together",
    avatar: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    description: "Develop. Preview. Deploy.",
    avatar: "https://assets.vercel.com/image/upload/v1588807975/repositories/vercel/logo.png"
  }
];
