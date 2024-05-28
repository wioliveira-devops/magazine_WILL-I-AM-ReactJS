import logo from '../assets/logo/Logo_Wi.jpg';
import UserButtons from './UserButtons';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
	const { pathname } = useLocation();
	const completeHeader = (
		<header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10'>
			<Link className='flex items-end' to='/'>
				<img
					className='h-16 px-2'
					src={logo}
					alt='Logo do Magazine Will-I-Am'
				/>
				<h2 className='px-3 text-3xl'>MAGAZINE</h2>
				<h2 className='px-1 text-3xl'>WILL-I-AM</h2>
			</Link>
			<UserButtons />
		</header>
	);

	const simpleHeader = (
		<header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10'>
			<Link className='flex items-end' to='/'>
				<img
					className='h-12 px-2'
					src={logo}
					alt='Logo do Magazine Will-I-Am'
				/>
				<h2 className='px-3 text-3xl'>MAGAZINE</h2>
				<h2 className='px-1 text-3xl'>WILL-I-AM</h2>
			</Link>
		</header>
	);

	return <>{ pathname === '/' ? completeHeader : simpleHeader}</>;
};

export default Header;
