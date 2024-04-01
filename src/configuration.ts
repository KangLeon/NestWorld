/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-02-03 01:29:55
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-01 23:44:31
 * @FilePath: /NestWorld/src/configuration.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";
import * as _ from "lodash";

const YAML_CONFIG_FILENAME = "config.yml";
const filePath = join(__dirname, "../config", YAML_CONFIG_FILENAME);

const envPath = join(
  __dirname,
  "../config",
  `config.${process.env.NODE_ENV || "development"}.yml`,
);

const commonConfig = yaml.load(readFileSync(filePath, "utf8"));

const envConfig = yaml.load(readFileSync(envPath, "utf8"));

export default () => {
  return _.merge(commonConfig, envConfig);
};
