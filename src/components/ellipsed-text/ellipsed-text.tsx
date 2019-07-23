import { Component, h, Element, Prop, Method } from "@stencil/core";

@Component({
  shadow: true,
  tag: "ellipsed-text",
  styleUrl: "ellipsed-text.css"
})
export class EllipsedText {
  parent: any;
  @Prop() test: String;
  @Element() host: HTMLElement;

  componentDidLoad() {
    this.parent = this.host.parentElement;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  }

  @Method()
  async update() {
    this.setSize();
  }

  setSize = () => {
    const { left } = this.getRect(this.host);
    const { width } = this.getRect(this.parent);

    const hostWidth = width - left;
    this.host.style.width = `${hostWidth}px`;
  };

  getRect(element: Element): any {
    return element.getBoundingClientRect();
  }

  render() {
    return <slot />;
  }
}
