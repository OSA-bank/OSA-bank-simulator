import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import SocialButtonsPage from '../SocialMedia/socialmedia';
import Map from '../Map/Map';
import Iframe from 'react-iframe'


const FooterContainer = styled.footer`
.footer-middle {
	background: var(--mainDark);
	padding-top: 3rem;
	color: var(--mainWhite)
}
.footer-bottom {
   padding-top: 3rem;
   padding-bottom: 2rem;
}
a {
	color: var(--mainGrey)
}
a: hover {
	color: var(--mainLightGrey)
}
`;

function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle">
			<div className="container">
				<div className="row">
					{/**Column1 */}
					
					<div className="col-sm">
						<h4>Opening Hours</h4>
					</div>
					{/**Column3 */}
					<div className="col-sm">
						<h4>You can contact us on</h4>
						<ul className="list-unstyled">
							<li>&nbsp;<i class="fa fa-phone" aria-hidden="true"></i> +21671858585</li>
							<li>&nbsp;<i class="fa fa-envelope-o" aria-hidden="true"></i> osa@bank.tn</li>
							<li>&nbsp;<i class="fa fa-map-marker" aria-hidden="true"></i> Rue IBN HAMDOUN En Nekhilet</li>
							<li>&nbsp;<i class="fa fa-phone" aria-hidden="true"></i> +21671858585</li>
							
						</ul>
					</div>
					{/**Column4 */}
					<div className="col-sm">
						<h4>Local Address</h4>
						<Map/>
					</div>
				</div>

				{/* Footer bottom */}
				<div className="footer-bottom">
					<p className="text-xs-center">
						&copy;{new Date().getFullYear} OSA Bank -All Rights Reserved
					</p>
					<SocialButtonsPage />
				</div>

			</div>	
			</div>
		</FooterContainer>
	);
  }


 export default Footer;

