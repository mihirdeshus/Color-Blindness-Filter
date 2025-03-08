let rec filter_mod3 (l: int list) : int list =
  match l with
  | [] -> []
  | h :: t -> if h mod 3 = 0 then h :: filter_mod3 t
              else filter_mod3 t
              
