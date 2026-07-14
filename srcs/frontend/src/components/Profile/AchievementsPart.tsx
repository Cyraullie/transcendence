import { useNavigate } from "react-router";
import {
  defaultachievement,
  type achievementT,
} from "../../utils/type/achievementType";
import { useEffect, useState } from "react";
import { getAchievement, achievementArray } from "../../api/http/achievement";
import { useNotif } from "../../components/hooks/useNotif";
import { useAuth } from "../../components/hooks/useAuth";

type Props = {
  updateachievement: boolean;
};
export function AchievementsPart({ updateachievement }: Props) {
  const navigate = useNavigate();
  const [valid, setValid] = useState<boolean | null>(null);
  const [achievement, setachievement] =
    useState<achievementT>(defaultachievement);
  const notif = useNotif();
  const auth = useAuth();

  useEffect(() => {
    function other_error(message: string) {
      navigate("/", { state: location.pathname });
      notif?.showNotif("Unknown Error", message, 5000);
      setValid(false);
      return;
    }

    async function load_achievement() {
      const tmp_achievement = await getAchievement(auth.logged_in);
      if ("code" in tmp_achievement) {
        return other_error(tmp_achievement.response);
      }
      setachievement(achievementArray(tmp_achievement));
      setValid(true);
    }
    load_achievement();
  }, [navigate, auth.logged_in, notif, updateachievement]);

  if (valid === null) {
    return (
      <div className="page-content flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!valid) {
    navigate("/", { state: location.pathname });
    // notif bar
    setValid(false);
    return;
  }

  return (
    <div className="page-content my-17">
      <div className="flex flex-wrap justify-center gap-10"
      >
        {achievement.achievement.map((player) => {
          return (
              <div
                key={player.title}
			    className="shadow-2xl shadow-base-300 p-4 rounded-2xl bg-base-300 flex flex-col w-fit"
              >
                <div
				className="flex mb-10 w-80"
                >
                  <img
                    src={"/" + player.img}
					className="max-h-20 aspect-square mr-10"
                  />
                  <div>
                    <h3>{player.title}</h3>
                    <p>{player.description}</p>
                    <p>obtention rate: {player.rate}%</p>
                  </div>
                </div>

                <progress
				className=" w-full rounded-2xl bg-base-content &::-webkit-progress-bar]:rounded-2xl [&::-webkit-progress-value]:rounded-2xl [&::-webkit-progress-value]:bg-secondary [&::-moz-progress-bar]:bg-secondary"
                  value={player.value}
                  max={player.max_value}
                />
              </div>
          );
        })}
      </div>
    </div>
  );
}
