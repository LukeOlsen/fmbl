export interface Line {
  id: bigint;
  home_team: string | null;
  home_team_id: number | null;
  away_team: string | null;
  away_team_id: number | null;
  home_points: number | null;
  away_points: number | null;
  betting_lines: {
    home_moneyline: number | null;
    away_moneyline: number | null;
    over_under: number | null;
    formatted_spread: string | null;
    spread: number | null;
  }[];
}
