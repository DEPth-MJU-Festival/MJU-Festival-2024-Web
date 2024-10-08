import { Saero } from '@/types/saero';
import * as S from '@styles/saero/SaeroMember';
import SaeroMemberComponent from './SaeroMemberComponent';

const SaeroMember = ({ team }: { team: Saero }) => {
  return (
    <S.Container>
      <S.Team>{team.team}</S.Team>
      <S.ComponentContainer>
        <SaeroMemberComponent
          position={'국장'}
          name={team.leader}
          major={team.leaderInfo}
        />
        <S.MembetContainer>
          {team.subLeader &&
            (!Array.isArray(team.subLeader) ? (
              <SaeroMemberComponent
                position="차장"
                name={team.subLeader}
                major={team.subLeaderInfo}
              />
            ) : (
              team.subLeader.map((subLeader, index) => (
                <SaeroMemberComponent
                  position="차장"
                  name={subLeader.name}
                  major={subLeader.info}
                  key={index}
                />
              ))
            ))}
        </S.MembetContainer>
        {team.members && team.members.length > 0 && (
          <S.MembetContainer>
            {team.members.map((member, index) => (
              <SaeroMemberComponent
                position="국원"
                name={member.name}
                major={member.info}
                key={index}
              />
            ))}
          </S.MembetContainer>
        )}
      </S.ComponentContainer>
    </S.Container>
  );
};

export default SaeroMember;
