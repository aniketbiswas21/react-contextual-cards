import React, { useState, useEffect } from "react";
import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

const useAPIHandler = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  const apiObservable$ = ajax
    .getJSON("https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4")
    .pipe(
      map((data) => data),
      catchError((error) => of(error))
    );

  useEffect(() => {
    const subscription = apiObservable$.subscribe({
      next: (data) => {
        console.log(data);
        setData(data);
      },
      error: (error) => {
        console.error(error);
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
  }, []);

  return [data, error, status];
};

export default useAPIHandler;
