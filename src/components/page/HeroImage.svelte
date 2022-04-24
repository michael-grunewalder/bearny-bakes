<script>
    import BrandName from '../branding/BrandName.svelte';
    export let title
    export let use_brand

     const images = [
        {path: '/images/slides/slide001.jpg', id: 'slide001'},
        {path: '/images/slides/slide002.jpg', id: 'slide002'},
        {path: '/images/slides/slide003.jpg', id: 'slide003'},
        {path: '/images/slides/slide004.jpg', id: 'slide004'},
        {path: '/images/slides/slide005.jpg', id: 'slide005'}
    ];
    const img = images[Math.floor(Math.random()*images.length)];
    console.log(img.path);
    const heroImage = img.path;
    console.log(title);
    
</script>


<section id="image-hero" class="image-hero" style="background-image: url({heroImage});">

    <div class="inner-section absolute inset-0 z-10 h-full bg-ebony-400 bg-opacity-60 ">
        <div class="inner-content relative w-full h-full flex flex-col items-center justify-items-center place-content-center">
            <img src="/images/branding/bearny-bakes-logo-512.png" alt="Bearny bakes Logo" class="relative w-fit object-contain" />
            <h1 class="text-6xl text-shadow-xl text-center text-secondary font-cookie">{#if use_brand == 'yes'}<BrandName /> - {/if}{title}</h1>
        </div>
        
    </div>

</section>

<style>
.image-hero {
        @apply bg-fixed bg-center bg-no-repeat bg-cover w-screen h-screen m-0 z-0;
    }
</style>

