using System.Web;
using System.Web.Optimization;

namespace Institution_Website
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.4.2.js",
                        "~/Scripts/jquery-ui-1.7.2.min.js",
                        "~/Scripts/jquery-ui-i18n.min.js",
                        "~/Scripts/jquery.cycle.all.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/main.css",
                      "~/Content/home.css",
                      "~/Content/styles.css",
                      "~/Content/site.css"
                      ));
        }
    }
}
