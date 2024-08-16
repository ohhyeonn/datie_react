import React from "react";
import styled from "styled-components";

function IdentityVerification() {
  return (
    <VerificationSection>
      <h2 className="section-title">실명확인(주민등록번호 / 외국인등록번호)</h2>
      <VerificationForm>
        <div className="form-row">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" className="input-field" />
        </div>
        <div className="form-row">
          <label htmlFor="id-number">
            주민등록번호
            <br />
            [외국인등록번호]
          </label>
          <div className="id-number-inputs">
            <input
              type="text"
              id="id-number-1"
              className="input-field"
              pattern="\d{6}" // 6자리 숫자 패턴
              maxLength="6" // 최대 6자리
              placeholder=""
              required
            />
            <span className="separator">-</span>
            <input
              type="password" // 입력 필드 타입을 password로 변경
              id="id-number-2"
              className="input-field"
              pattern="\d{7}" // 7자리 숫자 패턴
              maxLength="7" // 최대 7자리
              placeholder=""
              required
            />
          </div>
        </div>
      </VerificationForm>
    </VerificationSection>
  );
}

const VerificationSection = styled.section`
  display: flex;
  margin-top: 33px;
  width: 100%;
  flex-direction: column;
  padding: 0 8px;

  .section-title {
    color: #050505;
    align-self: flex-start;
  }
`;

const VerificationForm = styled.form`
  border-radius: 2px;
  background-color: #fff;
  margin-top: 11px;
  width: 500px;
  padding: 34px 24px;
  border: 1px solid #c0bdbd;

  .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 9px;
    gap: 10px;
    width: 100%; /* 전체 너비 사용 */
  }

  label {
    color: #050505;
    text-align: center;
    white-space: nowrap;
    flex: 0 0 120px; /* 레이블의 고정 너비 설정 */
  }

  .input-field {
    background-color: #fff;
    flex: 1; /* 남은 공간을 차지하도록 설정 */
    height: 24px;
    border: 1px solid #c0bdbd;
  }

  .id-number-inputs {
    display: flex;
    gap: 4px;
    flex: 1; /* 남은 공간을 차지하도록 설정 */
  }

  .separator {
    align-self: center;
  }

  @media (max-width: 640px) {
    .input-field {
      margin-left: 18px;
      padding-right: 23px;
    }
  }
`;

export default IdentityVerification;
