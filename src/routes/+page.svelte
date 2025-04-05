<script lang="ts">
    import logo from '../lib/assets/tinder_logo.png';
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="grid grid-cols-2 gap-4">
        <div
            class="relative flex justify-center h-[400px] w-[210px] border-4 border-black rounded-2xl contant bg-white"
            style="box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218)"
        >
            <span
                class="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"
            ></span>

            <span
                class="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"
            ></span>
            <span
                class="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"
            ></span>

            <div class="absolute top-0 w-[80%] h-[80%] flex items-center justify-center">
                <img src="{logo}" alt="logo"/>
            </div>
            <h1 class="absolute bottom-15 text-2xl font-bold">Custom Tinder</h1>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-xl font-bold mb-4">Explore the Features</h2>
            <p class="text-gray-700">
                SvelteKit offers a powerful framework for building web
                applications.
            </p>
        </div>
    </div>
</div>
