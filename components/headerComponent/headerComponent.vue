<template>
	<header class="header">
		<div class="grid-r">
			<div class="grid-c-4 flex-vertical-center">
				<nuxt-link to="/">
					<picture>
						<source
							:data-srcset="logo.url + '?w=90&fm=webp'"
							media="(max-width: 500px)"
							type="image/webp"
						/>
						<source
							:data-srcset="logo.url + '?w=90&fm=webp'"
							media="(min-width: 1000px)"
							type="image/webp"
						/>
						<img :src="logo.url + '?w=90'" :alt="logo.title" class="lazyload lazyloaded header__logo" />
					</picture>
				</nuxt-link>
			</div>
			<div class="grid-c-12">
				<nav class="header__nav full-height">
					<ul class="reset-ul header__nav-list full-height flex-end flex-vertical-center">
						<li v-for="(item, index) in menuList.items" :key="index" class="header__nav-list-item">
							<nuxt-link :to="'/' + item.slug + '/'">
								{{ item.slug.replace("-", " ") }}
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/kontakt/" class="btn">Book foredrag</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<style lang="scss" src="./headerNavigation.scss"></style>
<script src="./headerComponent.ts"></script>
