<script lang="ts">
    import { enhance } from "$app/forms";

    export let data: {
        user: {
            name: string;
            age: number;
            sex: string;
            points: number;
            createdAt: Date;
        };
    };

    export let form: {
        error?: string;
    };

    let isProfile = true;
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div
        class="card font-sans bg-white rounded-lg overflow-hidden w-96 transform transition duration-500 hover:shadow-2xl"
    >
        <div
            class="p-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white"
        >
            <div class="flex justify-between items-center">
                <div class="text-lg font-montserrat font-bold">
                    <button
                        on:click={() => (isProfile = true)}
                        class="text-2xl font-bold cursor-pointer {isProfile ? 'underline' : ''}">User Profile
                    </button>
                </div>
                <span>|</span>
                <div class="text-lg font-montserrat font-bold">
                    <button
                        on:click={() => (isProfile = false)}
                        class="text-2xl font-bold cursor-pointer {!isProfile ? 'underline' : ''}">Password
                    </button>
                </div>
            </div>
        </div>
        <div class="p-6 font-montserrat">
            {#if isProfile}
                <form action="?/updateProfile" method="POST">
                    <!-- Name -->
                    <div class="mb-3">
                        <label
                            for="inputname"
                            class="block text-gray-800 font-semibold text-sm"
                            >Name</label
                        >
                        <div class="mt-1">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                placeholder={data.user.name}
                            />
                        </div>
                    </div>

                    <!-- Age -->
                    <div class="mb-3">
                        <label
                            for="inputname"
                            class="block text-gray-800 font-semibold text-sm"
                            >Age</label
                        >
                        <div class="mt-1">
                            <input
                                id="age"
                                type="number"
                                name="age"
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                placeholder={String(data.user.age)}
                            />
                        </div>
                    </div>

                    <!-- Gender -->
                    <div class="mb-3">
                        <label
                            for="inputname"
                            class="block text-gray-800 font-semibold text-sm"
                            >Gender</label
                        >
                        <div class="mt-1">
                            <select
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                name="gender"
                                id="gender"
                                value={data.user.sex}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <!-- Points -->
                    <p class="block text-gray-800 font-semibold text-sm mb-3">
                        Points:
                        <span class="font-bold">{data.user.points}</span>
                    </p>

                    <button
                        class="bg-indigo-500 hover:bg-indigo-600 rounded p-0.5"
                        aria-label="edit"
                        type="submit"
                    >
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 11.917 9.724 16.5 19 7.5"
                            />
                        </svg>
                    </button>
                </form>
            {:else}
                <form action="?/passwordChange" method="POST" use:enhance>
                    <div class="mb-3">
                        <label
                            for="oldPassword"
                            class="block text-gray-800 font-semibold text-sm"
                            >Current Password</label
                        >
                        <div class="mt-1">
                            <input
                                id="oldPassword"
                                type="password"
                                name="oldPassword"
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label
                            for="newPassword"
                            class="block text-gray-800 font-semibold text-sm"
                            >New Password</label
                        >
                        <div class="mt-1">
                            <input
                                id="newPassword"
                                type="password"
                                name="newPassword"
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label
                            for="newPassword1"
                            class="block text-gray-800 font-semibold text-sm"
                            >Again Password</label
                        >
                        <div class="mt-1">
                            <input
                                id="newPassword1"
                                type="password"
                                name="newPassword1"
                                class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 placeholder-gray-600"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {#if form?.error}
                        <p class="text-red-500 text-sm mb-3">
                            {form.error}
                        </p>
                    {/if}

                    <button
                        class="bg-indigo-500 hover:bg-indigo-600 rounded p-0.5"
                        aria-label="edit"
                        type="submit"
                    >
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 11.917 9.724 16.5 19 7.5"
                            />
                        </svg>
                    </button>
                </form>
            {/if}
        </div>
        <div class="p-4 bg-gray-200 text-center">
            <div class="text-gray-800 font-mono text-sm">
                User since: {data.user.createdAt.toLocaleDateString()}
            </div>
        </div>
    </div>
</div>
