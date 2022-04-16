interface ExtraWorkImageParameters {
  src: string;
  caption: string;
}

export class ExtraWorkImage {
  src: string;
  caption: string;

  constructor({ src, caption }: ExtraWorkImageParameters) {
    this.src = src;
    this.caption = caption;
  }
}

interface WorkParameters {
  src: string;
  header: string;
  details: string;
  extraImages?: ExtraWorkImage[];
}

export class Work {
  public src: string;
  public header: string;
  public details: string;
  public extraImages?: ExtraWorkImage[];

  constructor({ src, header, details, extraImages }: WorkParameters) {
    this.src = src;
    this.header = header;
    this.details = details;
    this.extraImages = extraImages;
  }
}
