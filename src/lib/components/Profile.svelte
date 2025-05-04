<script lang="ts">
    import { enhance } from "$app/forms";
    import female from "$lib/assets/female.png";
    import male from "$lib/assets/male.png";
    import other from "$lib/assets/other.png";

    let { user, error, local } = $props();
    let isProfile = $state(true);
</script>

{#if local === true}
    <div
        class="card font-sans bg-white rounded-lg overflow-hidden w-96 transform transition duration-500 hover:shadow-2xl"
    >
        <div
            class="p-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white"
        >
            <div class="flex justify-between items-center">
                <div class="text-lg font-montserrat font-bold">
                    <button
                        onclick={() => (isProfile = true)}
                        class="text-2xl font-bold cursor-pointer {isProfile
                            ? 'underline'
                            : ''}"
                    >
                        User Profile
                    </button>
                </div>
                <span>|</span>
                <div class="text-lg font-montserrat font-bold">
                    <button
                        onclick={() => (isProfile = false)}
                        class="text-2xl font-bold cursor-pointer {!isProfile
                            ? 'underline'
                            : ''}"
                    >
                        Password
                    </button>
                </div>
            </div>
        </div>
        <div class="p-6 font-montserrat">
            <img
                src={user.sex === "male"
                    ? male
                    : user.sex === "female"
                      ? female
                      : other}
                alt="profile_photo"
                class="w-24 h-24 rounded-full mx-auto mb-4 border-3 border-black shadow-lg"
            />
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
                                placeholder={user.name}
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
                                placeholder={String(user.age)}
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
                                value={user.sex}
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
                        <span class="font-bold">{user.points}</span>
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

                    {#if error}
                        <p class="text-red-500 text-sm mb-3">
                            {error}
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
                User since: {user.createdAt.toLocaleDateString()}
            </div>
        </div>
    </div>
{:else}
    <div
        class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[5] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
    >
        <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
        >
            <div
                class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-indigo-700 after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-indigo-700 before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300"
            >
                <img
                    src={user.sex === "male"
                        ? male
                        : user.sex === "female"
                          ? female
                          : other}
                    alt="profile_photo"
                    class="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                />
                <div
                    class="absolute bg-indigo-700 z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"
                ></div>
            </div>
        </div>
        <div class="headings *:text-center *:leading-4">
            <p class="text-xl font-semibold text-gray-800">
                {user.name}
            </p>
            <p class="text-gray-800 font-semibold text-sm mt-1">{user.sex}</p>
        </div>
        <div class="w-full items-center justify-center flex">
            <ul class="flex flex-col items-start gap-2 text-gray-800 pb-3">
                <li>
                    <p class="text-gray-800 font-semibold text-sm">
                        +123-458-784
                    </p>
                </li>
                <li>
                    <p class="text-gray-800 font-semibold text-sm">
                        +123-458-784
                    </p>
                </li>
                <!-- Add more -->
            </ul>
            <button
                class="bg-indigo-500 hover:bg-indigo-600 rounded p-0.5"
                type="button"
                onclick={() => location.reload()}
            >
            Back
            </button>
        </div>
        <hr
            class="w-full group-hover:h-5 h-3 bg-indigo-700 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
        />
    </div>
{/if}
