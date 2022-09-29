import { StyledHeader } from './style';
import Carousel from '../Carousel';
import ElasticCarousel from 'react-elastic-carousel';
import logoImg from '../../../../public/images/gallery/logo.png'

const Header = () => {
	return (
		<StyledHeader>
			<ElasticCarousel
				transitionMs={3000}
				showArrows={false}
				pagination={false}
				enableSwipe={false}
				enableAutoPlay={true}
				autoPlaySpeed={3000}
			>
				<Carousel
					heading={'Pratos de melhores'}
					subHeading2={'QUALIDADE'}
					background={'home-slide-1.jpg'}
				/>
				<Carousel
					heading={'Cozinhando Desde'}
					subHeading2={'1999'}
					background={'home-slide-2.jpg'}
				/>
			</ElasticCarousel>
		</StyledHeader>
	);
};

export default Header;
