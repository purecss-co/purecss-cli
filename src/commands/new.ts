import { Command } from "@oclif/core";
import { cd, exec } from "shelljs";
const figlet = require("figlet");
const { version } = require("../../package.json");

export default class New extends Command {
  static description =
    "Generate purecss project base on https://github.com/purecss-co/purecss-template";

  static examples = ["pcss new project-name"];

  static args = [
    { name: "project", description: "Project name", required: true },
  ];

  public async run(): Promise<void> {
    console.log(figlet.textSync("purecss-co"));
    console.log(`v${version} by Asyraf Hussin \n`);

    const { args } = await this.parse(New);

    exec(
      `git clone git@github.com:purecss-co/purecss-template.git ${args.project}`
    );
    cd(`${args.project}`);
    exec("rm -rf ./.git && rm -rf ./README.md");
    exec("npm install");
  }
}
