"Print to console": {
		"prefix": "ccc",
		"body": [
			"console.log($1)"
		],
		"description": "Log output to console"
	},
  "React function component": {
		"prefix": "comp",
		"body": [
			"const Comp = () => {",
				"return(true)",
			  "};",
			  "export default Comp"
		],
		"description": "A simple React function component"
	},
	"Arrow function": {
		"prefix": "comp",
		"body": [
			"const $1 = (props) => {",
			"",
			"const $1 = props.$1",
			"",
			"return(true)",
			"",
			"}",
			"",
			"export default $1"
		],
		"description": "Ready React Component"
	}
