import * as SVG from '../../../public/svg';

export default function ApproveEmailModal() {
  return (
    <>
      <h2>인증 메일이 전송되었습니다!</h2>
      <p>
        전송된 메일에서 <span>인증 버튼</span>을 눌러
        <br /> 인증을 완료해주세요
      </p>
      <SVG.Mail />
    </>
  );
}
