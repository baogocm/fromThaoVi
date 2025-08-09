import React, { useState, useEffect } from 'react';
import './GraduationLetter.css';
import graduationCap from '../assets/images/graduation-cap.svg';
import diploma from '../assets/images/diploma.svg';
import celebration from '../assets/images/celebration.svg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const GraduationLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);

  const fullText = "Chúc Mừng Tốt Nghiệp! 🎓✨";

  const photos = [
    {
      src: img1,
      alt: "Kỷ niệm đẹp 1",
      caption: "Những khoảnh khắc đáng nhớ"
    },
    {
      src: img2,
      alt: "Kỷ niệm đẹp 2", 
      caption: "Hành trình học tập"
    },
    {
      src: img3,
      alt: "Kỷ niệm đẹp 3",
      caption: "Thời gian tuyệt vời"
    }
  ];

  const quotes = [
    {
      text: "Học tập là hành trình suốt đời, không phải là đích đến.",
      author: "Mahatma Gandhi"
    },
    {
      text: "Thành công không phải là cuối cùng, thất bại không phải là chết người.",
      author: "Winston Churchill"
    },
    {
      text: "Hãy tin vào bản thân và tất cả mọi thứ đều có thể.",
      author: "Christopher Reeve"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowConfetti(true), 1000);
  }, []);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  const handleOpenLetter = () => {
    setShowEnvelope(false);
    setTimeout(() => {
      setIsLetterOpen(true);
    }, 500);
  };

  return (
    <div className="graduation-container">
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="floating-elements">
        <div className="floating-icon" style={{ left: '10%', top: '20%' }}>🎓</div>
        <div className="floating-icon" style={{ right: '15%', top: '30%' }}>✨</div>
        <div className="floating-icon" style={{ left: '20%', bottom: '25%' }}>🌟</div>
        <div className="floating-icon" style={{ right: '10%', bottom: '35%' }}>🎉</div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="content-wrapper">
        {showEnvelope && (
          <div className="envelope-container">
            <div className="envelope" onClick={handleOpenLetter}>
              <div className="envelope-front">
                <div className="envelope-seal">🎓</div>
                <div className="envelope-text">Nhấn để mở thư</div>
              </div>
              <div className="envelope-flap"></div>
            </div>
          </div>
        )}

        {!showEnvelope && (
          <div className={`graduation-card ${isVisible ? 'visible' : ''} ${isLetterOpen ? 'letter-open' : ''}`}>
            <div className="header-section">
              <div className="graduation-cap">
                <img src={graduationCap} alt="Graduation Cap" className="cap-image" />
              </div>
              <h1 className="main-title">{currentText}</h1>
              <p className="subtitle">Chúc mừng bạn đã hoàn thành hành trình học tập!</p>
              <div className="decoration-line"></div>
            </div>

            <div className="letter-card">
              <div className="date-badge">2025</div>
              <h2 className="letter-title">Thư Chúc Mừng Tốt Nghiệp</h2>
              <div className="letter-body">
                <div className="greeting">
                  <span className="greeting-icon">👋</span>
                  <p>Gửi cô bạn nhỏ nhắn, nhẹ nhàng và đầy nghị lực của tui!</p>
                </div>
                <div className="letter-content">
                  <p>Vậy là hành trình đại học của Hà đã chính thức khép lại – một chặng đường đầy nỗ lực, kiên trì và biết bao cố gắng.</p>
                  <p>Hà là kiểu người bước vào một căn phòng chỉ cần mỉm cười là đã khiến người khác cảm thấy thoải mái. Tui tin, chính sự nhẹ nhàng ấy, cộng với tài năng và sự cố gắng bền bỉ, sẽ đưa Hà đến những nơi xứng đáng trong tương lai.</p>
                  <p>Chúc Hà sau ngày hôm nay sẽ càng rực rỡ hơn nữa – trong công việc, trong cuộc sống và trong chính hành trình trưởng thành của mình. Dù chặng đường phía trước có thử thách hay ngã rẽ bất ngờ, hy vọng Hà vẫn sẽ giữ được tâm hồn dịu dàng ấy, và luôn biết mình đang đi về phía nào.</p>
                  <p>Tui thấy rất vui vì đã từng có một khoảng thời gian đi chung với một người tuyệt vời như Hà. Tốt nghiệp chỉ là bắt đầu – còn bao nhiêu điều tuyệt vời đang chờ phía trước, cô gái bé nhỏ iu ơi.</p>
                </div>
                <div className="closing">
                  <p>Thương mến!</p>
                  <p>Người đồng đội cùng ăn trưa trong căn phòng máy lạnh mát rượi kkkk</p>
                </div>
                <div className="signature">
                  <div className="signature-line"></div>
                  <p className="signature-name">Với tất cả tình yêu thương</p>
                </div>
              </div>
            </div>

            <div className="photos-section">
              <h2 className="section-title">Bestie</h2>
              <div className="photos-grid">
                {photos.map((photo, index) => (
                  <div key={index} className="photo-card">
                    <div className="photo-container">
                      <img src={photo.src} alt={photo.alt} className="photo-image" />
                      <div className="photo-overlay">
                        <div className="photo-caption">{photo.caption}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quotes-section">
              <h2 className="section-title">Những Lời Khuyên Quý Báu</h2>
              <div className="quotes-carousel">
                {quotes.map((quote, index) => (
                  <div key={index} className="quote-card">
                    <div className="quote-icon">💭</div>
                    <p className="quote-text">"{quote.text}"</p>
                    <p className="quote-author">- {quote.author}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="celebration-footer">
              <div className="celebration-icons">
                <div className="celeb-icon">🎊</div>
                <div className="celeb-icon">🎈</div>
                <div className="celeb-icon">🎁</div>
              </div>
              <p className="celebration-text">Chúc mừng và chúc bạn một tương lai tươi sáng! 🌟</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraduationLetter; 