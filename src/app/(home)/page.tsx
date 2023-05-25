/** @jsxImportSource @emotion/react */
'use client'

import { Hero } from "@/components/hero/hero";
import { UsageContainer } from "@/components/usage-container/usage-container";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <UsageContainer />
        </div>
    );
};