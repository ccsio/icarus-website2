<script setup>
const sponsorsTiers = {
    zeus: {
        name: "zeus",
        text: "text-zeus-gold",
        bg: "bg-zeus-gold",
        bggradient: "bg-gradient-to-br from-yellow-50 to-amber-100",
        iconpath: "/icons/zeus_lightning.svg",
        border: "border-zeus-gold",
        emoji: "⚡"
    },
    poseidon: {
        name: "poseidon",
        text: "text-poseidon-blue",
        bg: "bg-poseidon-blue",
        bggradient: "bg-gradient-to-br from-blue-50 to-cyan-100",
        iconpath: "/icons/poseidon_trident2.svg",
        border: "border-poseidon-blue",
        emoji: "Ψ"
    },
    demeter: {
        name: "demeter",
        text: "text-demeter-green",
        bg: "bg-demeter-green",
        bggradient: "bg-gradient-to-br from-green-50 to-emerald-100",
        iconpath: "/icons/demeter_wheat.svg",
        border: "border-demeter-green",
        emoji: "🌿"
    }
}
</script>


<template>
    <div class="text-center mb-0">
        <h2 class="text-icarus-red font-bold tracking-widest uppercase text-sm mb-2">
            {{ $t('collaboration.tiers.title') }}
            <!-- Sponsorship Tiers -->
        </h2>
        <h1 class="text-4xl md:text-5xl font-black">
            {{ $t('collaboration.tiers.heading') }}
            <!-- Join The Pantheon -->
        </h1>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto italic">
            {{ $t('collaboration.tiers.caption') }}
            <!-- Choose the sponsorship level that aligns with your goals. Every tier fuels our mission to push the boundaries of engineering excellence. -->
        </p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="tier in sponsorsTiers" :key="tier" class="max-w-7xl mx-auto px-4 py-16">
            <div class="relative rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2" :class="tier.bggradient, tier.border">
                <!-- Crown Icon -->
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" :class="tier.bg">
                        <img :src="tier.iconpath" alt="Tier Icon" class="w-6 h-6" />
                    </div>
                </div>
                
                <div class="mt-6 text-center">
                    <h3 class="text-3xl font-black mb-2 uppercase" :class="tier.text">
                        {{ $t(`collaboration.tiers.${tier.name}.name`) }}
                        <!-- Zeus, Poseidon, Demeter -->
                    </h3>
                    <p class="text-sm font-semibold mb-4" :class="tier.text">
                        {{ $t(`collaboration.tiers.${tier.name}.tagline`) }}
                        <!-- King of the Gods -->
                    </p>
                    <p class="text-gray-700 italic text-sm leading-relaxed">
                        {{ $t(`collaboration.tiers.${tier.name}.description`) }}
                        <!-- Our most prestigious partners. Zeus-tier sponsors provide substantial monetary support that powers our entire operation—from chassis fabrication to competition travel. -->
                    </p>
                </div>
                
                <!-- Perks List -->
                <ul class="mt-6 space-y-2 text-sm text-gray-700">
                    <li class="flex items-start">
                        <span class="mr-2 font-bold" :class="tier.text">{{ tier.emoji }}</span>
                        <span class="font-semibold">{{ $t(`collaboration.tiers.${tier.name}.perk1`) }}</span>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-2 font-bold" :class="tier.text">{{ tier.emoji }}</span>
                        <span class="font-semibold">{{ $t(`collaboration.tiers.${tier.name}.perk2`) }}</span>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-2 font-bold" :class="tier.text">{{ tier.emoji }}</span>
                        <span class="font-semibold">{{ $t(`collaboration.tiers.${tier.name}.perk3`) }}</span>
                    </li>
                </ul>
                
                <!-- Partnership Requirement Section -->
                <div class="mt-6 pt-4 border-t border-dashed" :class="tier.border">
                    <div class="space-y-3">
                        <!-- Header Label -->
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full animate-pulse" :class="tier.bg"></div>
                            <span class="text-[10px] font-black uppercase tracking-widest opacity-70" :class="tier.text">
                                {{ $t('collaboration.tiers.requirements') }}
                                <!-- Partnership Requirement -->
                            </span>
                        </div>
                        
                        <!-- Requirement Box -->
                        <div class="bg-gray-100 rounded-lg p-3 border" :class="tier.border">
                            <p class="text-xs font-bold mb-1 uppercase" :class="tier.text">
                                {{ $t('collaboration.tiers.requirement_title') }}``
                                <!-- Requirement Title -->
                            </p>
                            <p class="text-[11px] leading-relaxed text-gray-600">
                                {{ $t(`collaboration.tiers.${tier.name}.requirement_description`) }}
                                <!-- Requirement Description -->
                            </p>
                        </div>
                        
                        <!-- Technical Tag -->
                        <div class="flex justify-end">
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded border text-gray-800" :class="tier.border">
                                {{ $t('collaboration.tiers.type') }}: {{ $t(`collaboration.tiers.${tier.name}.type`) }}
                                <!-- TYPE: tier.type -->
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center mt-16">
        <p class="text-gray-600 mb-6 text-lg">
            {{ $t('collaboration.tiers.cta') }}
            <!-- Ready to fuel the future of engineering? -->
        </p>
            <a 
            href="mailto:contact@icarus-team.com?subject=Sponsorship Inquiry&body=Hi, I'm interested in discussing sponsorship opportunities with your team."
            class="inline-block bg-icarus-red hover:shadow-icarus-red-50 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 uppercase tracking-widest text-sm"
            >
            {{ $t('collaboration.tiers.cta_button') }}
            <!-- Let's Discuss Partnership Details -->
        </a>
        <p class="text-gray-500 dark:text-gray-500 text-xs mt-4">
            {{ $t('collaboration.tiers.contact_info') }} <a href="mailto:contact@icarus-team.com" class="underline hover:text-icarus-red">contact@icarus-team.com</a>
            <!-- Or email us directly at <a href="mailto:contact@icarus-team.com" class="underline hover:text-icarus-red">contact@icarus-team.com</a> -->
        </p>
    </div>
</template>