import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ApproveId, Search, StuList } from '../../Atom/Atoms';
import * as S from './style';

interface Props {
  type: boolean;
}

export default function List({ type }: Props) {
  const setApproveId = useSetRecoilState(ApproveId);
  const stuList = useRecoilValue(StuList);
  const search = useRecoilValue(Search);

  return (
    <S.TableWrapper>
      <S.Table modeType={type}>
        <thead>
          <tr>
            {type && (
              <th>
                <S.CheckBox type="checkbox" />
              </th>
            )}
            {!type && (
              <>
                <th>이름</th>
                <th>학년</th>
                <th>반</th>
                <th>번호</th>
              </>
            )}
            <th>이메일</th>
            {type && <th>&nbsp;</th>}
          </tr>
        </thead>
        <tbody>
          {stuList
            .filter((e) =>
              (e.email + e.grade + e.classNum + e.name).includes(search)
            )
            .map((e, index) => (
              <tr key={index}>
                {type && (
                  <td>
                    <S.CheckBox type="checkbox" />
                  </td>
                )}
                {!type && (
                  <>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                  </>
                )}
                <td>{e.email}</td>
                {type && (
                  <td>
                    <span>
                      <S.SelecTypeBtn
                        colorType={true}
                        onClick={() => {
                          setApproveId(e.email);
                          // onOpen();
                        }}
                      >
                        수락
                      </S.SelecTypeBtn>
                      <S.SelecTypeBtn colorType={false}>거절</S.SelecTypeBtn>
                    </span>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
}
