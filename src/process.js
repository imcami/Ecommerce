import { program } from "commander";

program.option('-d, --debug', 'output for debug', false)
.option('m, --mode, environment to work on', 'dev')
.option('-p, --port, port to run on', 8080)
program.parse(process.argv)

// program.opts() //para recuperar la informacion de algun option


export default program;