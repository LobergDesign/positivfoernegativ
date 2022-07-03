<template>
	<header class="header" ref="header">
		<div class="grid-r flex-space-between-md">
			<div class="grid-c-1 grid-c-md-16 flex-vertical-center">
				<nuxt-link to="/">
					<NuxtImg
						provider="contentful"
						width="100"
						height="80"
						:src="logo.url"
						:alt="logo.title"
						class="header__logo"
					/>
				</nuxt-link>
				<button
					aria-label="toggle menu"
					class="header-menu-icon"
					type="button"
					v-on:click="toggleMenu()"
					:class="{ 'is-active': isMenuActive }"
				>
					<span></span>
				</button>
			</div>
			<div class="grid-c-14">
				<nav class="header__nav">
					<ul
						class="reset-ul header__nav-list flex-space-around flex-center-center"
						:class="{ 'is-active': isMenuActive }"
					>
						<li v-for="(item, index) in menuList.items" :key="index" class="header__nav-list-item">
							<nuxt-link :to="'/coaching/' + item.slug + '/'" v-if="item.isCoachingSubpage">
								<span v-if="item.linkName">{{ item.linkName.replace("-", " ") }}</span>
								<span v-else>{{ item.slug.replace("-", " ") }}</span>
							</nuxt-link>
							<nuxt-link v-else :to="'/' + item.slug + '/'">
								<span v-if="item.linkName">{{ item.linkName.replace("-", " ") }}</span>
								<span v-else>{{ item.slug.replace("-", " ") }}</span>
							</nuxt-link>
						</li>
						<li class="header__nav-list-item contact-link">
							<nuxt-link :to="'/kontakt/'">
								<span>Kontakt</span>
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
			<div class="grid-c-1 flex-end flex-vertical-center contact-link-desktop">
				<div class="header__nav-list-item">
					<nuxt-link :to="'/kontakt/'" class="btn"> Kontakt </nuxt-link>
				</div>
			</div>
		</div>
	</header>
</template>
<style lang="scss" scoped>
@import "./headerNavigation.scss";
</style>
<script src="./headerComponent.ts"></script>
