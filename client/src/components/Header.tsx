import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/other" class={url == '/other' && 'active'}>
					Other
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
