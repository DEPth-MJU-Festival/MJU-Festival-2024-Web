import * as S from '@styles/layout/FooterStyle';
import DEPthLogoIcon from '@icons/logo/DEPthLogo.svg?react';
import LinkIcon from '@icons/footer/Link.svg?react';
import GithubIcon from '@icons/footer/Github.svg?react';
import InstagramIcon from '@icons/footer/Instagram.svg?react';
import MailIcon from '@icons/footer/Mail.svg?react';

const Footer = () => {
  return (
    <S.Container>
      <DEPthLogoIcon color="var(--PaleYellow)" />
      <S.LinkWrap>
        <S.Link href="https://depth-mju.co.kr" target="_blank">
          <LinkIcon color="var(--PastelBlue)" />
        </S.Link>
        <S.Link href="https://github.com/DEPthes" target="_blank">
          <GithubIcon color="var(--PastelBlue)" />
        </S.Link>
        <S.Link
          href="https://www.instagram.com/depth_mju.co.kr"
          target="_blank"
        >
          <InstagramIcon color="var(--PastelBlue)" />
        </S.Link>
        <S.Link href="mailto:2022depth@gmail.com" target="_blank">
          <MailIcon color="var(--PastelBlue)" />
        </S.Link>
      </S.LinkWrap>
      <hr />
      <span>
        Copyright © DEPth MJU.
        <br />
        All Rights Reserved
      </span>
    </S.Container>
  );
};

export default Footer;
