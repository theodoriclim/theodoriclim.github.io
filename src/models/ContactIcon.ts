interface ContactIconParameters {
  src: string;
  tooltip: string;
  onClickAction: string;
}

export class ContactIcon {
  public src: string;
  public tooltip: string;
  public onClickAction: string;

  constructor({ src, tooltip, onClickAction }: ContactIconParameters) {
    this.src = src;
    this.tooltip = tooltip;
    this.onClickAction = onClickAction;
  }
}
