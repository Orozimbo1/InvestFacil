// @ts-nocheck
const Analytics = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-P9438RGXY3`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', G-P9438RGXY3, {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export default Analytics