<script setup>
const zeusSponsors = ["efg", "eurobank", "apeeel2"]
const poseidonSponsors = ["esl2", "dreamcars"]
const demeterSponsors = ["ortea", "delphis", "ratrig"]
</script>

<template>
    <div class="max-w-6xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-center mb-8">{{ $t('collaboration.sponsors.title') }}</h2>
        <p class="text-center text-lg text-gray-700 mb-12">
        {{ $t('collaboration.sponsors.description') }}
        </p>
    
        <div class="grid gap-8 grid-rows-3">
            <!-- Example Sponsor Card -->
            <!-- Zeus Sponsors -->
            <div class="flex flex-row justify-center gap-8">
                <div v-for="sponsor in zeusSponsors" :key="sponsor" class="bg-white rounded-lg shadow-md hover:shadow-lg duration-300 p-6 flex flex-col items-center shadow-[#eeba2b] max-w-md">
                    <img :src="`/sponsors/${sponsor}.webp`" alt="sponsor Logo" class="h-16 mb-4 object-contain">
                    <!-- <h3 class="text-xl font-semibold mb-2">{{ $t(`collaboration.sponsors.${sponsor}.name`) }}</h3> -->
                    <p class="text-gray-600 text-center">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
                </div>
            </div>
            <!-- Poseidon Sponsors -->
            <div class="flex flex-row justify-center gap-8">
                <div v-for="sponsor in poseidonSponsors" :key="sponsor" class="bg-white rounded-lg shadow-md hover:shadow-lg duration-300 p-6 flex flex-col items-center scale-90 shadow-[#38b6ff] max-w-88">
                    <img :src="`/sponsors/${sponsor}.webp`" alt="sponsor Logo" class="h-16 mb-4 object-contain">
                    <!-- <h3 class="text-xl font-semibold mb-2">{{ $t(`collaboration.sponsors.${sponsor}.name`) }}</h3> -->
                    <p class="text-gray-600 text-center">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
                </div>
            </div>
            <!-- Demeter Sponsors -->
            <div class="flex flex-row justify-center gap-6">
                <div v-for="sponsor in demeterSponsors" :key="sponsor" class="bg-white rounded-lg shadow-md hover:shadow-lg duration-300 p-6 flex flex-col items-center scale-80 shadow-[#007a3f] max-w-80">
                    <img :src="`/sponsors/${sponsor}.webp`" alt="sponsor Logo" class="h-16 mb-4 object-contain">
                    <!-- <h3 class="text-xl font-semibold mb-2">{{ $t(`collaboration.sponsors.${sponsor}.name`) }}</h3> -->
                    <p class="text-gray-600 text-center">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-center mb-0">{{ $t('collaboration.collaboration.title') }}</h2>
        <p class="text-center text-base italic text-gray-500 mb-12">
            {{ $t('collaboration.collaboration.caption') }}
        </p>
        <p class="text-center text-lg text-gray-700 mb-12">
            {{ $t('collaboration.collaboration.description') }}
        </p>
        

        <h2 class="text-3xl font-bold text-center mb-0">{{ $t('collaboration.benefits.title') }}</h2>
        <p class="text-center text-base italic text-gray-500 mb-12">
            {{ $t('collaboration.benefits.caption') }}
        </p>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div 
                v-for="benefit in [1, 2, 3, 4, 5, 6]" :key="benefit"
                class="group bg-white rounded-xl shadow-lg p-8 w-80 cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 hover:rotate-1 hover:shadow-2xl shadow-icarus-red">  
                <div class="flex flex-col items-center space-y-4">  
                <!-- Icon with nested hover effect using the 'group' class -->  
                <div class="w-20 h-20 transition-all duration-300 ease-in-out group-hover:scale-110 bg-black group-hover:bg-icarus-red"  
                    :style="{  
                    backgroundColor: iconColor,  
                    maskImage: `url('/icons/benefits/benefit${benefit}.svg')`,  
                    webkitMaskImage: `url('/icons/benefits/benefit${benefit}.svg')`,  
                    maskRepeat: 'no-repeat',  
                    webkitMaskRepeat: 'no-repeat',  
                    maskSize: 'contain',  
                    webkitMaskSize: 'contain'  
                    }"  
                >
                </div>
            
                <h2 class="text-2xl font-bold text-gray-800 text-center">  
                    {{ $t(`collaboration.benefits.benefits.benefit${benefit}.title`) }}  
                </h2>
                <p class="text-gray-600 text-center">  
                    {{ $t(`collaboration.benefits.benefits.benefit${benefit}.description`) }}
                </p>
                </div>  
            </div>
        </div>


        <div>
            <h3 class="text-2xl text-center font-bold mb-2">{{ $t('collaboration.collaboration.funds.title') }}</h3>
            <div class="flex flex-wrap gap-7 max-w-5xl mx-auto items-center">
                <div>
                    <div class="relative group max-w-[90vw] mx-auto md:max-w-md">
                        <img src="/image_carousel/smoketunnel_gen2.webp" loading="lazy" alt="Icarus Generation 2 at the smoke tunnel" class="max-w-[90vw] md:max-w-md flex-1 rounded group-hover:brightness-50">
                        <div class="absolute hidden text-white bottom-0 group-hover:block group-hover:bg-icarus-red-50 w-full rounded bg-opacity-50">
                            <p class="text-md md:text-lg text-center">
                                Icarus Generation 2 at the smoke tunnel.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-xl w-fit flex-1">
                    <p class="text-sm md:text-base">
                        <ol>
                            <li class="mb-0.5" v-for="allocation in [1, 2, 3, 4, 5, 6]" :key="allocation">
                                <p class="text-icarus-red font-bold text-base md:text-lg -mb-1">{{ $t(`collaboration.collaboration.funds.allocation${allocation}.title`) }}</p>
                                <p class="text-gray-600 italic ml-5">{{ $t(`collaboration.collaboration.funds.allocation${allocation}.description`) }} </p>
                            </li>
                            
                        </ol>
                    </p>
                </div>
            </div>
        </div>

        <div>

  



        </div>

        <!-- <h3 class="text-2xl text-center font-bold mb-12">{{ $t('collaboration.collaboration.funds.title') }}</h3>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div 
                v-for="allocation in [1, 2, 3, 4, 5, 6]" :key="allocation"
                class="group bg-white rounded-xl shadow-lg p-8 w-80 cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 hover:rotate-1 hover:shadow-2xl shadow-icarus-red">  
                <div class="flex flex-col items-center space-y-4">  

                <div class="w-20 h-20 transition-all duration-300 ease-in-out group-hover:scale-110 bg-black group-hover:bg-icarus-red"  
                    :style="{  
                    backgroundColor: iconColor,  
                    maskImage: `url('/icons/funds_allocations/allocation${allocation}.svg')`,  
                    webkitMaskImage: `url('/icons/funds_allocations/allocation${allocation}.svg')`,  
                    maskRepeat: 'no-repeat',  
                    webkitMaskRepeat: 'no-repeat',  
                    maskSize: 'contain',  
                    webkitMaskSize: 'contain'  
                    }"  
                >
                </div>
            
                <h2 class="text-2xl font-bold text-gray-800 text-center">  
                    {{ $t(`collaboration.collaboration.funds.allocation${allocation}.title`) }}  
                </h2>
                <p class="text-gray-600 text-center">  
                    {{ $t(`collaboration.collaboration.funds.allocation${allocation}.description`) }}
                </p>
                </div>  
            </div>
        </div> -->
    </div>

</template>