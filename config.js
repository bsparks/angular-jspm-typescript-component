System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "target": "es5",
    "module": "system"
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.2",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.2",
    "text": "github:systemjs/plugin-text@0.0.7",
    "ts": "github:frankwallis/plugin-typescript@4.0.2",
    "ts-runtime": "npm:babel-runtime@5.8.35",
    "typescript": "npm:typescript@1.8.9",
    "github:angular/bower-angular-mocks@1.5.2": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:frankwallis/plugin-typescript@4.0.2": {
      "typescript": "npm:typescript@1.8.9"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
