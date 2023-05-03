import React from "react";
import "../../assets/styles/youtube.css";
import IUTV from "../../assets/image/Youtube/IU_TV.jpg";
import IUCLIP from "../../assets/image/Youtube/IU_CLIP.jpg";
import IUPALETTE from "../../assets/image/Youtube/IU_PALETTE.jpg";
import IUOFFICIAL from "../../assets/image/Youtube/IU_OFFICIAL.jpg";
import PlayIcon from "../../assets/image/Youtube/play-icon.png";

const Youtube = () => {
  return (
    <div className='Official-container'>
      <div className='Official-title'>
        <h1>IU Official</h1>
        <p>
          IU OFFICIAL YOUTUBE 채널에서 다양한 아이유의 활동 및 일상 영상들을
          확인하실 수 있습니다.
        </p>
      </div>

      <div className='Official-ChanelBox'>
        <div className='IUTV-Chanel'>
          <div className='Chanel-Thumbnail'>
            <img src={IUTV} alt='IUTV-IMG' />
            <div className='play-icon'>
              <img src={PlayIcon} alt='playIcon' />
            </div>
          </div>

          <div className='Chanel-info'>
            <div className='Chanel-title'>
              <h2>IU TV</h2>
            </div>

            <div className='info-txt'>
              <p>
                채널명을 '아티비(IU TV)'라고 할 정도로 이지금 채널을 대표하는
                콘텐츠 목록입니다. 뮤직비디오 촬영장 비하인드 영상이나 콘서트
                비하인드 영상 등등 비즈니스 일상 영상들과 이외의 아이유의 일상
                영상들을 볼 수 있는 채널입니다.
              </p>
            </div>
          </div>
        </div>

        <div className='IUTV-Chanel'>
          <div className='Chanel-info'>
            <div className='Chanel-title'>
              <h2>IU CLIP</h2>
            </div>

            <div className='info-txt'>
              <p>
                콘서트 클립 영상, 안무 연습 영상 및 여러 인터뷰 영상이 있으며
                가끔 앨범 나오기 전이나 콘서트 개최 전 미리보기 영상들도
                올라오고, 분류하기 어려운 각종 클립 영상을 모은 재생목록입니다.
              </p>
            </div>
          </div>

          <div className='Chanel-Thumbnail'>
            <img src={IUCLIP} alt='IUTV-IMG' />

            <div className='play-icon'>
              <img src={PlayIcon} alt='playIcon' />
            </div>
          </div>
        </div>

        <div className='IUTV-Chanel'>
          <div className='Chanel-Thumbnail'>
            <img src={IUPALETTE} alt='IUTV-IMG' />

            <div className='play-icon'>
              <img src={PlayIcon} alt='playIcon' />
            </div>
          </div>

          <div className='Chanel-info'>
            <div className='Chanel-title'>
              <h2>IU PALETTE</h2>
            </div>

            <div className='info-txt'>
              <p>
                2020년 9월부터 시작된 게스트와의 토크쇼 겸 음악 라이브
                채널입니다. 게스트의 컴백 홍보나 영화 홍보 등등 다양한 목적으로
                많은 유명 엔터테이너들이 출연하고 있습니다. 음악 라이브
                콘텐츠답게 별도의 하우스 밴드도 함께합니다.
              </p>
            </div>
          </div>
        </div>

        <div className='IUTV-Chanel'>
          <div className='Chanel-info'>
            <div className='Chanel-title'>
              <h2>OFFICIAL</h2>
            </div>

            <div className='info-txt'>
              <p>
                수능 응원 메시지, 팬들에게 전하는 새해 인사 및 연말 인사, 콘서트
                홍보 영상, 팬클럽 모집 안내 영상 등등 소식과 팬들에게 전하는
                소통 홍보 공간입니다.
              </p>
            </div>
          </div>

          <div className='Chanel-Thumbnail'>
            <img src={IUOFFICIAL} alt='IUTV-IMG' />

            <div className='play-icon'>
              <img src={PlayIcon} alt='playIcon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
