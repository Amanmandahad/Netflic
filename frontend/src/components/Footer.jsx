const Footer = () => {
	return (
		<footer className='py-6 px-4 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-center text-center'>
				<p className='text-sm leading-loose text-muted-foreground'>
					Built by{" "}
					<span className='font-semibold text-white'>Aman Mandahad</span>. The source code is available on{" "}
					<a
						href='https://github.com/Amanmandahad'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4 text-white'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
