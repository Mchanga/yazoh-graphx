const categories = [
  "All work",
  "Graphics",
  "Branding",
  "Motion Graphics",
];

const videoAssets = import.meta.glob("./assets/**/*.{mp4,webm}", {
  eager: true,
  import: "default",
  query: "?url",
});

const assetGroups = {
  Graphics: import.meta.glob("./assets/graphix/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
  Branding: import.meta.glob("./assets/branding/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
  "Motion Graphics": {
    ...import.meta.glob("./assets/motion/*.{png,jpg,jpeg,webp,gif,mp4,webm}", {
      eager: true,
      import: "default",
      query: "?url",
    }),
    ...import.meta.glob("./assets/**/*.{mp4,webm}", {
      eager: true,
      import: "default",
      query: "?url",
    }),
  },
};

const fallbackAssets = {
  "back.mp4": {
    title: "Back Video",
    category: "Video",
    description: "Portfolio video project",
    tag: "VIDEO",
  },
  "home.mp4": {
    title: "Home Motion",
    category: "Motion Graphics",
    description: "Motion graphics project",
    tag: "MOTION",
  },
  "logo.jpeg": {
    title: "Yazoh Logo",
    category: "Branding",
    description: "Brand identity project",
    tag: "BRANDING",
  },
  "yazzoh.jpeg": {
    title: "Yazoh Portrait",
    category: "Graphics",
    description: "Graphic design project",
    tag: "GRAPHICS",
  },
};

const assetToDisplayName = (groupName, index) => {
  const projectNumber = String(index + 1).padStart(2, "0");

  if (groupName === "Motion Graphics") {
    return `Motion Story ${projectNumber}`;
  }

  if (groupName === "Branding") {
    return `Brand Identity ${projectNumber}`;
  }

  if (groupName === "Graphics") {
    return `Visual Concept ${projectNumber}`;
  }

  return `${groupName} Project ${projectNumber}`;
};

const buildProjects = (groupName, groupAssets) =>
  Object.entries(groupAssets).map(([assetPath, src], index) => {
    const filename = assetPath.split("/").pop() || "";
    const extension = filename.split(".").pop()?.toLowerCase() || "";
    const isVideo = ["mp4", "webm"].includes(extension);
    const fallback = fallbackAssets[filename];
    const generatedTitle = assetToDisplayName(groupName, index);

    return {
      title: fallback?.title || generatedTitle,
      category: fallback?.category || groupName,
      description:
        fallback?.description ||
        (isVideo ? "Video project for portfolio showcase." : "Creative visual project in the portfolio."),
      mediaType: isVideo ? "video" : "image",
      src,
      alt: `${groupName} portfolio piece ${index + 1}`,
      tag: fallback?.tag || (isVideo ? "VIDEO" : groupName.toUpperCase()),
    };
  });

const projects = [
  ...buildProjects("Graphics", assetGroups.Graphics),
  ...buildProjects("Branding", assetGroups.Branding),
  ...buildProjects("Motion Graphics", assetGroups["Motion Graphics"]),
];

const services = [
  {
    number: "01",
    title: "Graphic design",
    summary:
      "Posters, matangazo ya kidijitali na picha zinazoleta mawazo yako karibu na hadhira.",
    description:
      "Ninabuni picha na ubunifu unaozungumza kwa hadhira yako kwa njia ya kuvutia, ya kisasa na inayofanya biashara iwe na hisia wazi. Huduma hii inajumuisha poster design, social media creatives, campaign visuals, event branding, na custom graphics kwa matumizi ya kisasa.",
    examples: [
      "Social media visuals",
      "Poster campaigns",
      "Event graphics",
    ],
  },
  {
    number: "02",
    title: "Motion graphics",
    summary:
      "Mawazo yanayochangamka kupitia animation, typography na simulizi ya picha.",
    description:
      "Ninafanya motion graphics zinazotua, kuvutia na kuelimisha—kila animation inaeleza hadithi kwa kasi inayofaa kwa brand yako. Huduma hii inahusu short promo videos, product teasers, logo reveals, motion ads, na animations ya digital storytelling.",
    examples: [
      "Promo videos",
      "Animation ads",
      "Logo reveals",
    ],
  },
  {
    number: "03",
    title: "Brand identity",
    summary:
      "Nembo(logo) na mifumo ya chapa inayojenga utambulisho unaokumbukwa.",
    description:
      "Ninasaidia kujenga utambulisho wa chapa (logo) unaoonekana, unaokumbukwa, na unaowakilisha thamani ya biashara yako kwa uwazi. Huduma hii inajumuisha logo design, brand guidelines, brand system, packaging visuals, na materials ya marketing yanayofaa kwa kampuni au mtu binafsi.",
    examples: [
      "Logo systems",
      "Brand guidelines",
      "Packaging visuals",
    ],
  },
];

export { categories, projects, services };
