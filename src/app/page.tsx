import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
			<Image src="/logo.png" alt="Brainlens Logo" width={300} height={100} />
			<h1>Starter Kit Development</h1>
		</div>
	);
}
