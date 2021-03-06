import { useState, useEffect } from "react";
import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

const useAPIHandler = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");
  const [refetch, setRefetch] = useState(false);

  const apiObservable$ = ajax
    .getJSON("https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4")
    .pipe(
      map((data) => data),
      catchError((error) => of(error))
    );

  useEffect(() => {
    const subscription = apiObservable$.subscribe({
      next: (data) => {
        setData(data);
      },
      error: (error) => {
        setError(error);
        setStatus("error");
      },
      complete() {
        setStatus("done");
      },
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const refetchData = () => {
    setRefetch(!refetch);
  };

  return [data, error, status, refetchData] as [
    any,
    any,
    "idle" | "done" | "error",
    () => void
  ];
};

export default useAPIHandler;
