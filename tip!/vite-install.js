at tsconfig.json
{
    "compilerOptions": {
        "target": "ES2020",
            "useDefineForClassFields": true,
                "lib": ["ES2020", "DOM", "DOM.Iterable"],
                    "module": "ESNext",
                        "skipLibCheck": true,

                            /* Bundler mode */
                            "moduleResolution": "bundler",
                                "allowImportingTsExtensions": true,
                                    "resolveJsonModule": true,
                                        "isolatedModules": true,
                                            "noEmit": true,
                                                "jsx": "react-jsx",
                                                    "baseUrl": "./",
                                                        "paths": {
            "@/*": ["src/*"]
        },

        /* Linting */
        "strict": true,
            "noUnusedLocals": true,
                "noUnusedParameters": true,
                    "noFallthroughCasesInSwitch": true
    },
    "include": ["src"],
        "references": [{ "path": "./tsconfig.node.json" }]
}



vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});
