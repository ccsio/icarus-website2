<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'  
const { t } = useI18n()

const coreMembers = computed(() => [
{
    name: "Maia",
    role: t("team.core.maia.role"),
    image: "/images/team/gen4/maia.webp",
    bio: t("team.core.maia.bio")
},
{
    name: "Tomáš",
    role: t("team.core.tomas.role"),
    image: "/images/team/gen4/tomas.webp",
    bio: t("team.core.tomas.bio")
},
{
    name: "Matej",
    role: t("team.core.matej.role"),
    image: "/images/team/gen4/matej.webp",
    bio: t("team.core.matej.bio")
},
{
    name: "Margaux",
    role: t("team.core.margaux.role"),
    image: "/images/team/gen4/margaux.webp",
    bio: t("team.core.margaux.bio")
},
{
    name: "Alexandru",
    role: t("team.core.alexandru.role"),
    image: "/images/team/gen4/alexandru.webp",
    bio: t("team.core.alexandru.bio")
},
{
    name: "Ana",
    role: t("team.core.ana.role"),
    image: "/images/team/gen4/ana.webp",
    bio: t("team.core.ana.bio")
}
])

const mentors = computed(() => [  
    {  
        name: "Lukas",
        role: t("team.mentors.lukas_role"),
        image: "/images/team/gen3/lukas.webp"  
    },  
    {  
        name: "Petar",  
        role: t("team.mentors.petar_role"),
        image: "/images/team/gen3/petar.webp"  
    },
    {  
        name: "Nikos",  
        role: t("team.mentors.nikos_role"),
        image: "/images/team/gen3/nikos.webp"  
    }
])

const supportMembers = [  
{
    name: "Vasilis",
    role: t("team.support.vasilis.role"),
    image: "/images/team/gen4/vasilis.webp"
},
{
    name: "Alina",
    role: t("team.support.alina.role"),
    image: "/images/team/gen4/alina.webp"
}
]
</script>

<template>
    <section id="current-team" class="py-24 bg-black relative">
        <div class="max-w-7xl mx-auto px-6">
            
            <!-- Section Header -->
            <div class="mb-16 border-b border-white/10 pb-8">
                <h2 class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">{{ $t('team.current.label') }}</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-white tracking-tight italic">{{ $t('team.current.title') }}</h3>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-12">
                
                <!-- LEFT: Supervisor & Mentors (The "Support System") -->
                <aside class="lg:w-1/4 space-y-12">
                    <!-- Supervisor: Minimalist & Distinct -->
                    <div>
                        <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{{ $t('team.supervisor.title') }}</h4>
                        <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div class="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
                                <img src="/images/team/cheilas.webp" class="w-full h-full object-cover" alt="Supervisor" />
                            </div>
                            <div>
                                <p class="text-white font-bold text-sm">Mr. Cheilas</p>
                                <p class="text-icarus-red text-[9px] font-black uppercase tracking-widest">{{ $t('team.supervisor.role') }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Mentors: Small & Clean -->
                    <div>
                        <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{{ $t('team.mentors.title') }}</h4>
                        <div class="space-y-3">
                            <div v-for="mentor in mentors" :key="mentor.name" class="flex items-center gap-4 p-3 rounded-lg bg-white/5 transition-colors group hover:border-icarus-red/80 border border-white/10">
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10  transition-all">
                                    <img :src="mentor.image" class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p class="text-gray-300 text-xs font-semibold group-hover:text-white transition-colors">{{ mentor.name }}</p>
                                    <p class="text-icarus-red text-[8px] font-black uppercase tracking-widest group-hover:text-icarus-red/80 transition-colors">{{ mentor.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Support Members -->
                    <div>
                        <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{{ $t('team.support.title') }}</h4>
                        <div class="space-y-3">
                            <div v-for="support in supportMembers" :key="support.name" class="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:grayscale-0 transition-all">
                                    <img :src="support.image" class="w-full h-full object-cover scale-150" />
                                </div>
                                <p class="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">{{ support.name }}</p>
                                <p class="text-icarus-red text-[8px] font-black uppercase tracking-widest group-hover:text-icarus-red/80 transition-colors">{{ support.role }}</p>
                            </div>
                        </div>
                    </div>
                </aside>
                
                <!-- RIGHT: Core Members (The "Main Event") -->
                <div class="lg:w-3/4">
                    <h4 class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{{ $t('team.core.title') }}</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div 
                        v-for="member in coreMembers" 
                        :key="member.name"
                        class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-icarus-red/50 h-100"
                        >
                        <!-- (Same high-impact card logic as before) -->
                        <div class="h-full w-full relative overflow-hidden">
                            <img :src="member.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-175 scale-160" />
                            <div class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80"></div>
                            
                            <!-- Content -->
                            <div class="absolute bottom-0 left-0 w-full p-6 z-10 transition-transform duration-500 group-hover:-translate-y-24">
                                <p class="text-icarus-red text-[9px] font-black uppercase tracking-[0.2em] mb-1">{{ member.role }}</p>
                                <h4 class="text-xl font-bold text-white leading-tight">{{ member.name }}</h4>
                            </div>
                            
                            <!-- Bio Reveal -->
                            <!-- <div class="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/90 pt-6 opacity-75"> -->
                            <!-- <div class="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black from-20% via-black/60 via-60% to-transparent pt-24"> -->
                            <div class="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pt-20 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.95)_30%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.2)_85%,rgba(0,0,0,0)_100%)]">
                                <p class="text-gray-300 text-xs leading-relaxed italic">"{{ member.bio }}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
</template>