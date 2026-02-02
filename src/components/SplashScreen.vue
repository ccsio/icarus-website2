<script setup>
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const carouselConfig = {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true,
        autoplay: 4000,
        transition: 1000,
    }

    const imagePaths = [
        {"path": "/image_carousel/bake_sale_gen3.webp", "id": 0},
        {"path": "/image_carousel/smoketunnel_gen2.webp", "id": 1},
        {"path": "/image_carousel/team_gen3.webp", "id": 2},
        {"path": "/image_carousel/team_gen3_2.webp", "id": 3}
    ]

    const fr_flag = "/icons/fr.svg"
</script>

<template>
<div id="home" class="relative bg-icarus-red">
    <div class="relative z-0 ml-0 mt-0">
        <Carousel v-bind="carouselConfig">
            <Slide v-for="slide in imagePaths" :key="slide.id">
                <div class="relative overflow-hidden h-screen mt-0">
                    <img :src="slide.path" alt="Hello" class="w-screen h-screen object-cover z-0 object-[50%_30%] brightness-50" />
                </div>
            </Slide>

            <template #addons>
            <Pagination />
            </template>
        </Carousel>
        <div class="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white p-2 rounded text-center z-10">
            <h1 class="uppercase text-3xl md:text-5xl font-bold text-center font-dela">Icarus</h1>
            <i18n-t keypath="home.splash.caption" tag="p" class="text-center italic text-gray-300 text-xs md:text-sm lg:text-base">
                <template #STEMRacing>
                    <a href="#f1-in-schools" class="underline hover:text-icarus-red">STEM Racing</a>&trade;
                </template>
            </i18n-t>

            <br class="my-1 mx-0 block">
            <i18n-t keypath="home.splash.subheading" tag="p" class="text-md md:text-lg lg:text-xl">
                <template #awards>
                    <span class="font-bold text-icarus-red">
                        {{ $t('home.splash.awards_count') }}
                    </span>
                </template>
                <template #finals>
                    <span class="font-bold text-icarus-red">
                        {{ $t('home.splash.finals_name') }}
                    </span>
                </template>
            </i18n-t>
        </div>
    </div>
</div>

<img :src="fr_flag" />
</template>