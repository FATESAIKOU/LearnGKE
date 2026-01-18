/**
 * Custom ESLint plugin to enforce API call restrictions
 * 
 * Rule: no-client-api-calls
 * Prevents importing from @/lib/api in files that use "use client" directive
 */

const noClientApiCalls = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow API calls in client components",
      recommended: true,
    },
    messages: {
      noClientApiCalls:
        "API calls are not allowed in client components. Use Server Components or Server Actions instead.",
    },
    schema: [],
  },
  create(context) {
    let hasUseClientDirective = false;

    return {
      Program(node) {
        // Check if file has "use client" directive
        const firstStatement = node.body[0];
        if (
          firstStatement &&
          firstStatement.type === "ExpressionStatement" &&
          firstStatement.expression.type === "Literal" &&
          firstStatement.expression.value === "use client"
        ) {
          hasUseClientDirective = true;
        }
      },
      ImportDeclaration(node) {
        // If file has "use client" and imports from @/lib/api, report error
        if (hasUseClientDirective && node.source.value === "@/lib/api") {
          context.report({
            node,
            messageId: "noClientApiCalls",
          });
        }
      },
    };
  },
};

const plugin = {
  meta: {
    name: "custom-rules",
    version: "1.0.0",
  },
  rules: {
    "no-client-api-calls": noClientApiCalls,
  },
};

export default plugin;
