HOW TO ADD PHOTOS TO THE GALLERY (no rebuild needed)
======================================================

This folder is where you drop EXTRA photos for the
website's "Photos" gallery section. These photos show up
automatically — you do NOT need to run `npm run build`
again, and you do NOT need to touch any code.

STEP-BY-STEP
------------

1. Take/pick the photo you want to add.
2. Rename it to the NEXT NUMBER in this folder.
   - If this folder is empty, name it:      1.jpg
   - If "1.jpg" already exists, name it:    2.jpg
   - Then                                   3.jpg, 4.jpg, ...
3. Upload that file into THIS SAME "gallery" folder on
   Hostinger (inside your dist / public_html folder,
   at:  gallery/1.jpg, gallery/2.jpg, etc.)
4. Refresh the website — the photo appears in the gallery
   automatically, right after the existing photos.

IMPORTANT
---------
- Always name files with PLAIN NUMBERS: 1.jpg, 2.jpg, 3.jpg
  (not "photo1.jpg", not "IMG_2043.jpg" — the website looks
  specifically for 1.jpg, 2.jpg, 3.jpg... in order).
- The actual file can be a JPG, PNG, or WEBP — just save it
  with a ".jpg" filename ending and it will still display
  correctly.
- You can add up to 40 extra photos this way. If you need
  more than 40, let your developer know so the limit can be
  raised (one line of code).
- To REMOVE a photo, just delete its file from this folder.
  You don't need to renumber the others — the website simply
  skips any missing numbers.
- Recommended photo size: keep each photo under ~500KB
  (roughly 1600px on the long side) so the site stays fast
  on mobile data. Most phone camera apps have a "compress"
  or "smaller file size" option when sharing/exporting.

WHERE THIS FOLDER LIVES ON HOSTINGER
-------------------------------------
After you run `npm run build` and upload the `dist` folder
contents to Hostinger, this folder will be at:

    public_html/gallery/

Just drop numbered photos straight in there through
Hostinger's File Manager (or FTP) any time — no need to
rebuild or re-upload the whole site.
