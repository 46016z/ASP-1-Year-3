using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Institution_Website.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index(string email)
        {
            if (!string.IsNullOrEmpty(email))
            {
                ViewBag.UserEmail = email;
            }

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Gallery()
        {
            return View();
        }

        public ActionResult ClientDocuments()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Logout()
        {
            ViewBag.UserEmail = null;

            return View("Index");
        }
    }
}