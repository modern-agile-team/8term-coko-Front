import {
  Container,
  Content,
  Title,
  Hr,
  Paragraph,
  Section,
  Subtitle,
  List,
  ListItem,
  Strong,
} from '@/pages/terms-of-service/styles';

export default function TermsOfService() {
  return (
    <Container>
      <Content>
        <Title>개인정보 처리방침</Title>
        <Hr />
        <Paragraph>
          모던애자일(이하 “회사”라 함)이 취급하는 모든 개인정보는 관련 법령에
          근거하거나 정보주체로부터 동의를 받고 수집‧보유 및 처리되고 있습니다.
        </Paragraph>
        <Paragraph>
          본 개인정보 처리방침은 2025년 03월 01일부터 시행됩니다.
        </Paragraph>

        <Section>
          <Subtitle>제 1조 개인정보 처리목적</Subtitle>
          <List>
            <ListItem>
              <Strong>홈페이지 회원 가입 및 관리:</Strong> 카카오, 깃허브, 구글
              소셜로그인에 따른 회원 가입 의사 확인, 회원 자격 유지, 회원 자격
              관리, 회원 간의 구분, 서비스 부정 이용 및 비인가 사용 방지 목적
            </ListItem>
            <ListItem>
              <Strong>서비스 제공:</Strong> 회원의 프로필사진, 이름 공개, 게시글
              확인 등 컨텐츠 제공을 위한 개인 식별, 서비스 제공, 서비스 이용
              중에 발생하는 정보의 전달, 회원 간의 상호 소통 목적
            </ListItem>
            <ListItem>
              <Strong>서비스 개발 활용:</Strong> 맞춤 서비스 제공, 서비스 안내
              및 이용 권유, 서비스 개선 및 신규 서비스 개발을 위한 통계 및 접속
              빈도 파악 목적
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>제 2조 개인정보 처리 및 보유기간</Subtitle>
          <Paragraph>
            개인정보는 회원가입 후 회원탈퇴, 혹은 회사의 해당 서비스 종료
            이전까지 보관됩니다.
          </Paragraph>
          <Paragraph>
            개인정보는 회원의 의지로 회원탈퇴를 요청한 일로부터 30일 후, 혹은
            회사의 해당 서비스 종료 시 즉시 파기됩니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제 3조 개인정보 제 3자에 대한 제공</Subtitle>
          <Paragraph>
            회사는 정보 주체의 개인정보를 본 개인정보 처리방침 제1조에서 명시한
            범위 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정 등
            『개인정보 보호법』 제17조(개인정보의 제공)에 해당하는 경우에만
            개인정보를 제3자에게 제공합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제 4조 개인정보의 위탁처리</Subtitle>
          <List>
            <ListItem>
              <Strong>수탁업체:</Strong> (주)네이버, (주)카카오, 구글
            </ListItem>
            <ListItem>
              <Strong>위탁업무:</Strong> 서비스 제공을 위한, 이미지,
              이름(닉네임), 고유식별번호 수집
            </ListItem>
            <ListItem>
              <Strong>개인정보의 보유 및 이용기간:</Strong> 회원탈퇴 시
            </ListItem>
          </List>
        </Section>
        <Section>
          <Subtitle>제 5조 정보 주체의 권리, 의무 및 행사방법</Subtitle>
          <Paragraph>
            정보 주체는 “회사”의 모던월드 홈페이지(modern-world.kr)에서 언제든지
            다음 각호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              <Strong>개인정보 조회, 수정 및 삭제:</Strong> 마이페이지 우측
              프로필 사진 클릭 &gt; 프로필 업데이트 소셜 프로필 업데이트 가능
            </ListItem>
            <ListItem>
              <Strong>회원 탈퇴:</Strong> 담당자에게 요청
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>제 6조 처리하는 개인정보 항목</Subtitle>
          <List>
            <ListItem>
              <Strong>개인 회원</Strong>
            </ListItem>
            <ListItem>
              <Strong style={{ marginLeft: '25px' }}>회원 가입:</Strong> 필수
              항목: 성명, 이미지 (프로필 사진)
            </ListItem>
            <ListItem>
              <Strong style={{ marginLeft: '25px' }}>
                인터넷 서비스 이용과정에서 수집되는 개인정보 항목:
              </Strong>{' '}
              쿠키, 서비스 이용 기록, 불량 이용 기록 등
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>
            제 7조 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항
          </Subtitle>
          <Paragraph>
            <Strong>쿠키의 사용 목적:</Strong> 로그인 세션을 연장하기 위해 사용
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제 8조 개인정보의 파기</Subtitle>
          <Paragraph>
            회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제 9조 개인정보의 안전성 확보 조치</Subtitle>
          <Paragraph>
            회사는 이용자의 개인정보가 분실, 도난, 유출, 위∙변조 또는 훼손되지
            않도록 안전성 확보를 위하여 「정보통신망 이용촉진 및 정보보호 등에
            관한 법률」, 「개인정보보호법」 등 정보통신서비스 제공자가
            준수하여야 할 관련 법령에 따라 기술적∙관리적 보호조치를 적정하게
            취하고 있습니다.
          </Paragraph>
          <Paragraph>
            개인정보는 직접적으로 이용하지 않고 토큰 암호화 방식을 사용하여
            최소한의 정보를 가지고 안전하게 저장 및 전송합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>
            제 10조 개인정보 보호 책임자 및 개인정보 침해 문의
          </Subtitle>
          <Paragraph>
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 정보 주체의 불만 처리 및 피해구제 등을 위해 아래와
            같이 개인정보 보호 담당 부서를 지정하고 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              <Strong>부서명:</Strong> front-end팀
            </ListItem>
            <ListItem>
              <Strong>담당자:</Strong> 구도윤 (front-end 팀장)
            </ListItem>
            <ListItem>
              <Strong>이메일:</Strong> rhehfl418q@gmail.com
            </ListItem>
          </List>
          <Paragraph>
            기타 개인정보 침해에 대한 피해 구제, 상담은 아래의 기관에 문의하실
            수 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              <Strong>개인정보분쟁조정위원회:</Strong> (국번없이) 1833-6972
              (www.kopico.go.kr)
            </ListItem>
            <ListItem>
              <Strong>개인정보침해신고센터:</Strong> (국번없이) 118
              (privacy.kisa.or.kr)
            </ListItem>
            <ListItem>
              <Strong>대검찰청 사이버수사과:</Strong> (국번없이) 1301
              (www.spo.go.kr)
            </ListItem>
            <ListItem>
              <Strong>경찰청 사이버수사국:</Strong> (국번없이) 182
              (cyberbureau.police.go.kr)
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>제 11조 개인정보 처리방침의 변경</Subtitle>
          <Paragraph>
            회사의 개인정보 처리방침은 정부의 법률 및 지침의 변경과 당사의 약관
            및 내부 정책에 따라 변경될 수 있으며 이를 개정하는 경우, 회사는
            변경사항에 대해 『개인정보 보호법』 제30조 및 『개인정보 보호법
            시행령』 제31조에 따라 개정 내용을 회사 홈페이지 또는 전자우편을
            통해 공개하겠습니다.
          </Paragraph>
        </Section>
        <Title>이용약관</Title>
        <Hr />

        <Section>
          <Subtitle>제1조 (목적)</Subtitle>
          <Paragraph>
            본 약관은 모던애자일(이하 “회사”)가 제공하는 코코(이하 “서비스”) 및
            관련 제반 서비스의 이용에 관한 회사와 회원의 권리, 의무 및 책임 사항
            등을 규정하는 것을 목적으로 합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제2조 (용어의 정의)</Subtitle>
          <List>
            <ListItem>
              <Strong>“서비스”:</Strong> PC, 휴대용 단말기 등 다양한 기기 또는
              프로그램을 통해 제공되는 모든 인터넷 서비스를 포함하며, 회사가
              공개한 API를 통해 제3자가 개발한 프로그램이나 서비스도 포함됩니다.
            </ListItem>
            <ListItem>
              <Strong>“회원”:</Strong> 서비스를 이용하기 위해 약관에 동의하거나
              네이버, 구글, 카카오 등의 연동 서비스를 통해 회사와 이용 계약을
              체결한 자를 의미합니다.
            </ListItem>
            <ListItem>
              <Strong>“닉네임”:</Strong> 회원이 가입 시 설정한 이름으로, 회원의
              식별 및 서비스 이용을 위하여 사용됩니다.
            </ListItem>
            <ListItem>
              <Strong>“비회원”:</Strong> 회원 가입 없이 회사를 통해 제공하는
              서비스를 이용하는 자를 의미합니다.
            </ListItem>
            <ListItem>
              <Strong>“포인트”:</Strong> 서비스 내에서 얻은 가상의 자산으로,
              실제 통화나 재산이 아님을 명확히 합니다.
            </ListItem>
            <ListItem>
              <Strong>“아이템”:</Strong> 서비스 내에서 제공되는 가상의 자원을
              의미합니다.
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>제3조 (약관의 명시와 개정)</Subtitle>
          <Paragraph>
            회사는 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
            사업자등록번호, 연락처 등을 회원이 알 수 있도록 초기 화면에
            게시하거나 기타 방법으로 공지합니다.
          </Paragraph>
          <Paragraph>
            회사는 약관 개정 시 적용일자 및 개정 사유를 명시하여 현행 약관과
            함께 적용일자 7일 전부터 공지하며, 회원에게 불리한 경우 적용일자
            30일 이전부터 공지합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제4조 (서비스의 제공 및 변경)</Subtitle>
          <List>
            <ListItem>회원 간 정보 공유를 위한 가상공간 제공</ListItem>
            <ListItem>회원의 정보 저장 및 공유</ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>제5조 (서비스의 중단)</Subtitle>
          <Paragraph>
            회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절
            등의 사유로 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제6조 (회원가입)</Subtitle>
          <Paragraph>
            네이버, 카카오, 구글 등의 외부 서비스와 연동하여 이용계약을 신청할
            경우, 본 약관과 개인정보처리방침을 확인하고, 외부 서비스 계정 정보
            접근 및 활용에 동의하거나 확인 버튼을 누르면 이용계약이 성립됩니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제7조 (회원 탈퇴 및 자격 상실)</Subtitle>
          <Paragraph>
            회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 회원의 정보를 30일
            동안 보존 후 삭제합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제8조 (게시물의 저작권)</Subtitle>
          <Paragraph>
            회원이 서비스 내에서 작성한 게시물의 저작권은 해당 게시물의
            저작자에게 귀속됩니다. 그러나 회원은 게시물을 제출하거나
            게시함으로써 회사에 대해 게시물의 이용, 복사, 복제, 처리, 각색,
            변경, 공개, 전송, 게재 또는 배포할 수 있는 독점적이며 무상의
            저작사용권을 부여한 것으로 간주됩니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제9조 (게시물의 관리)</Subtitle>
          <Paragraph>
            회원의 게시물이 정보통신망법 및 저작권법 등 관련 법령에 위반되는
            내용을 포함하는 경우, 권리자는 관련 법령에 따라 해당 게시물의 게시
            중단 및 삭제를 요청할 수 있으며, 회사는 관련 법령에 따라 조치를
            취해야 합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제10조 (재판관할)</Subtitle>
          <Paragraph>
            회사는 서비스 이용과 관련하여 발생한 분쟁에 대해 대한민국 법을
            적용하며, 민사소송법상의 관할 법원에 제기합니다.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>제11조 (개인정보보호)</Subtitle>
          <Paragraph>
            회사는 서비스 제공을 위하여 필요한 범위 내에서 최소한의 개인정보를
            수집하며, 이용자가 언제든지 개인정보 열람 및 오류 정정을 요구할 수
            있습니다.
          </Paragraph>
        </Section>
      </Content>
    </Container>
  );
}
