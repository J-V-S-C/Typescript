export const task26 = () => {
  class Writer {
    private _tool: Tool | null = null;

    constructor(private _name: string) {}

    get name(): string {
      return this._name;
    }

    set tool(tool: Tool | null) {
      this._tool = tool;
    }

    get tool(): Tool | null {
      return this._tool;
    }

    write(): void {
      if (this.tool === null) {
        console.log('I cannot write without a tool');
        return;
      }
      this.tool.write();
    }
  }

  abstract class Tool {
    constructor(private _name: string) {}
    abstract write(): void;

    get name(): string {
      return this._name;
    }
  }

  class Pen extends Tool {
    write(): void {
      console.log(`${this.name} is writing...`);
    }
  }

  class Typewriter extends Tool {
    write(): void {
      console.log(`${this.name} is typing...`);
    }
  }

  const writer = new Writer('John');
  const pen = new Pen('Bic Pen');
  const typewriter = new Typewriter('Old Typewriter');

  console.log(writer.name);
  console.log(pen.name);
  console.log(Typewriter.name);

  writer.tool = pen;
  writer.write(); // Bic Pen is writing...

  writer.tool = typewriter;
  writer.write(); // Old Typewriter is typing...

  writer.tool = null;
  writer.write(); // I cannot write without a tool
};
