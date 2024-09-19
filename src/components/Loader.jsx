import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div className="loaderConainer text-center mt-24">
      <CircularProgress color="secondary" /> 
    </div>
  );
}